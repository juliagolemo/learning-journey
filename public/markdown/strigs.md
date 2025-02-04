
Każdy znak w stringu ma swoją pozycję (indeks).
Indeksy zaczynają się od 0 dla pierwszego znaku.

tekst = "Python"
print("Pierwszy znak:", tekst[0])   # P
print("Drugi znak:", tekst[1])      # y
print("Ostatni znak:", tekst[-1])  # n (indeks ujemny liczy od końca)
print("Przedostatni znak:", tekst[-2])  # o

print("Pierwsze trzy znaki:", tekst[0:3])   # Pyt (znaki od indeksu 0 do 2)
print("Od trzeciego znaku do końca:", tekst[2:])  # thon
print("Cały string co drugi znak:", tekst[::2])   # Pto
print("Środkowa część stringa:", tekst[1:5])  # ytho

## SLICING (wycinanie fragmentów stringa)
## ODWRACANIE STRINGA (Reversing a string)
print("Odwrócony string:", tekst[::-1])  