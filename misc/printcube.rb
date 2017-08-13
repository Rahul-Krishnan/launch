word = ARGV[0].upcase.chars
length = word.length
first_chunk = word[1..(length/2 - 1).to_i]
gap = (length/2).to_i * 2

def print_across(word)
  word.each do |letter|
    print "#{letter} "
  end
  puts
end

print " " * gap
print_across(word)

first_chunk.each_with_index do |letter, index|
  print " " * (gap - 2 - (index * 2))
  print "/"
  print " " * (1 + index * 2)
  print letter
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
