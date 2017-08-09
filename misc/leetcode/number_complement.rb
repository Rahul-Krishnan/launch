def find_complement(num)
    binary_array = num.to_s(2).chars
    binary_array.each_with_index do |digit, i|
        if digit == "1"
            binary_array[i] = 0
        else
            binary_array[i] = 1
        end
    end
    binary = binary_array.join("")
    complement = binary.to_i(2)
end
