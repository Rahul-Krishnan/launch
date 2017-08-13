word = ARGV[0].upcase.chars
length = word.length
gap = (length/2).to_i * 2

print " " * gap
word.each do |letter|
  print "#{letter} "
end
puts

word.each do |letter|
end

(gap/2).times do |n|
  print " " * (gap - 1 - (n * 2))
  print "/"
  print " " * (2 * length - 3)
  print "/"
  puts
end

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
