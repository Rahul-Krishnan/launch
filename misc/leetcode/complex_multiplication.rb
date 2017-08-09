def complex_number_multiply(a, b)
    a_array = a.split("+")
    b_array = b.split("+")

    real_a = a_array[0].to_i
    imaginary_a = a_array[1][0..-2].to_i
    real_b = b_array[0].to_i
    imaginary_b = b_array[1][0..-2].to_i

    real_product = real_a * real_b - imaginary_a * imaginary_b
    imaginary_product = real_a * imaginary_b + real_b * imaginary_a

    return "#{real_product}+#{imaginary_product}i"
end
