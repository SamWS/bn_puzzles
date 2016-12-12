=begin 

Puzzle 1:

Using Ruby or Javascript, write a program that prints the numbers from 1 to 100, but for multiples of four print "oi" instead of the number and for multiples of five print "ay". For numbers which are multiples of both four and five print "oi ay".

=end

def oiay(num)
  for i in 1..num
    if i % 4 == 0 && i % 5 == 0
      puts "oi ay"
    elsif i % 4 == 0
      puts "oi"
    elsif i % 5 == 0
      puts "ay"
    else
      puts i
    end
  end
end

puts oiay(100)

#################################################

=begin

Puzzle 3:

Using Ruby or Javascript, write a function that reverses an array without using a loop (eg don't use `for` keyword or the `each` or `loop` methods). Do not use the standard library `reverse` method.

=end

def reverseArr(arr)
  arr.length <= 1 ? arr : reverseArr(arr.drop(1)) + arr.first(1)
end

nums = [1,2,3,4,5,6,7,8,9]
newArr = ["Reversed", "been", "has", "array", "This"]

puts reverseArr(nums)
puts reverseArr(newArr)












