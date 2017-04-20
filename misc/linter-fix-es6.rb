require 'pry'

input_array = ARGV

input_array.each do |doc|
  if doc[-3..-1] == ".js"
    this_file = File.open(doc, "r")
    text = File.read(this_file)
    if text[0..24] == "/* jshint esversion: 6 */"
    else
      new_text = "/* jshint esversion: 6 */\n" + text
      File.open(doc, "w") { |file| file.write new_text }
    end
  else
  end
end

quit = false;
while !quit
  system "clear"
  choice = "no"
  quit = true
end
