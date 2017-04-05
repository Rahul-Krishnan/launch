require "sinatra"
require "sinatra/reloader"
require "sinatra/json"
require "json"
require "pry"

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/app/views"

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

def load_all_restaurants
  JSON.parse(File.read("restaurants.json"))
end

def load_all_reviews
  JSON.parse(File.read("reviews.json"))
end

def load_restaurant(restaurant_id)
  restaurants = load_all_restaurants
  restaurants.find do |restaurant|
    restaurant["id"] == restaurant_id
  end
end

def load_reviews_for(restaurant)
  reviews = load_all_reviews

  reviews.find do |review|
    review["restaurant_id"] == restaurant["id"]
  end
end

get "/" do
  erb :home
end

get "/restaurants" do
  redirect "/"
end

get "/api/v1/restaurants.json" do
  @restaurants = load_all_restaurants
  content_type :json
  json @restaurants
end

get "/api/v1/restaurants/:id" do
  @restaurant = load_restaurant(params[:id].to_i)
  @reviews = load_reviews_for(@restaurant)
  content_type :json
  { restaurant: @restaurant, reviews: @reviews }.to_json
end
