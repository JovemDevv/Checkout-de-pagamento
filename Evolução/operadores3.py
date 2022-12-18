"""Operadores logicos"""

#operador E(escreve and
#)
saldo = 1000
saque = 200
limite = 100

saldo >= saque and saque <= limite
#resposta dara= false

#operador OU(escreve or)

saldo = 1000
saque = 200
limite = 100

saldo >= saque or saque <= limite
#resposta: True

#operador de negação(not)

contatos_emergencia = []#lista( uma lista vazia em python da um valor boleano falso)

not 1000 > 1500
#True

not contatos_emergencia
#True

not "saque 1500;"
#false

not ""
#False

"""Parenteses"""
# AND = para ser True tudo tem que ser True

# OR = para ser True apenas tem que ser True

print(True and True)
print(True and False)
print(True or True)
print(True or False)

saldo = 1000
saque = 250
limite = 200
conta_especial = True

saldo >= saque and saque <= limite or conta_especial and saldo >= saque
# True

(saldo >= saque and saque <= limite) or (conta_especial and saldo >= saque)
#True