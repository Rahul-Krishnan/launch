word = ARGV[0].upcase.chars
length = word.length

word.each do |letter|
  print "#{letter} "
end
puts

(1..(length - 2)).each do |n|
  print word[n]
  print " " * (2 * length - 3)
  puts word[length - n - 1]
end

word.reverse.each do |letter|
  print "#{letter} "
end

puts
