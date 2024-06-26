# Операторы присваивания (assignment operators)

Основной оператор присваивания в JS - это знак равенства `=`, он присваивает значение правого операнда левому.

Assignment operators в JavaScript позволяют выполнять операции присваивания с другими операторами. 
Осуществляется с помощью одного из арифметических операторов или операторов сдвига, за которым следует знак равенства `+=, -=, *=, /=`. Сокращённые операторы только сокращают объём кода, но не увеличивают его быстродействие.

# Операторы присваивания

| Оператор | Название                                   | Использование | Равнозначная операция |
| -------- | ------------------------------------------ | ------------- | --------------------- |
| `=`      | Простое присваивание                       | `x = 7`       | `x = 7`               |
| `+=`     | Присваивание со сложением                  | `x += 5`      | `x = x + 5`           |
| `-=`     | Присваивание с вычитанием                  | `x -= 2`      | `x = x - 2`           |
| `*=`     | Присваивание с умножением                  | `x *= 3`      | `x = x * 3`           |
| `/=`     | Присваивание с делением                    | `x /= 6`      | `x = x / 6`           |
| `%=`     | Присваивание со взятием остатка от деления | `x %= 2`      | `x = x % 6`           |
| `<<=`    | Присваивание с левым сдвигом               | `x <<= y`     | `x = x << y`          |
| `>>=`    | Присваивание с правым сдвигом              | `x >>= y`     | `x = x >> y`          |
| `&=`     | Присваивание с побитовым И                 | `x &= y`      | `x = x & y`           |
| `\|=`    | Присваивание с побитовым ИЛИ               | `x \|= y`     | `x = x \| y`          |

# Инкремент и декремент

Инкремент `++` это унарная операция, которая увеличивает на единицу число, записанное в переменную  
Декремент `--` это унарная операция, которая уменьшает на единицу число, записанное в переменную  

Сущесвует два способа записи - prefix и postfix  

**Префмксная форма:** 
Расположение операторов `++`, `--` перед переменной  
`++i` - сначала происходит вычисление, и после выводится измененное значение переменной.

**Постфиксная форма:**  
Расположение операторов `++` и `--` стоят после переменной
`i++` - сначала будет выведено текущее значение переменной, и только после этого произойдет вычисление.

Инкремент/декремент можно применить только к переменной. Попытка использовать его к установленному значению, например 5++, приведёт к ошибке.