# Strings

Każdy znak w stringu ma swoją pozycję (indeks).
Indeksy zaczynają się od 0 dla pierwszego znaku.

```py
tekst = "Python"
print("Pierwszy znak:", tekst[0])   # P
print("Drugi znak:", tekst[1])      # y
print("Ostatni znak:", tekst[-1])  # n (indeks ujemny liczy od końca)
print("Przedostatni znak:", tekst[-2])  # o
```

```py
print("Pierwsze trzy znaki:", tekst[0:3])   # Pyt (znaki od indeksu 0 do 2)
print("Od trzeciego znaku do końca:", tekst[2:])  # thon
print("Cały string co drugi znak:", tekst[::2])   # Pto
print("Środkowa część stringa:", tekst[1:5])  # ytho
```

## SLICING (wycinanie fragmentów stringa)
## ODWRACANIE STRINGA (Reversing a string)
```py
print("Odwrócony string:", tekst[::-1])  
```
# Python methods
1. **strip()** – Usuwa białe znaki (spacje, tabulatory, nowe linie) z początku i końca stringa
```py
text = "  Hello, world!  "
print(text.strip())  # "Hello, world!"
```

2. **split()** – Dzieli string na listę słów według podanego separatora (domyślnie spacja)
```py
text = "apple,banana,grape"
print(text.split(","))  # ['apple', 'banana', 'grape']
```
3. **join()** – Łączy elementy listy w jeden string, używając podanego separatora
```py
words = ['apple', 'banana', 'grape']
print(", ".join(words))  # "apple, banana, grape"
```
4. **lower()** – Zamienia wszystkie litery na małe
```py
text = "Hello WORLD"
print(text.lower())  # "hello world"
```
5. **upper()** – Zamienia wszystkie litery na wielkie
```py
text = "Hello world"
print(text.upper())  # "HELLO WORLD"
```
6. **replace()** – Zamienia wszystkie wystąpienia danego fragmentu tekstu na inny
```py
text = "I love apples"
print(text.replace("apples", "bananas"))  # "I love bananas"
```
7. **index()** – Zwraca indeks (pozycję) pierwszego wystąpienia podanego znaku lub fragmentu
```py
text = "Hello world"
print(text.index("o"))  # 4
```
8. **endswith()** – Sprawdza, czy string kończy się podanym ciągiem znaków.
```py
text = "hello.txt"
print(text.endswith(".txt"))  # True
```
9. **startswith()** – Sprawdza, czy string zaczyna się podanym ciągiem znaków
```py
text = "hello world"
print(text.startswith("hello"))  # True
```
10. **len()** – Zwraca długość stringa (liczbę znaków)
```py
text = "Hello"
print(len(text))  # 5
```