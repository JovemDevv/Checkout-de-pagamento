segundos = int(input("Por favor, entre com o número de segundos que deseja converter: "))
dias = segundos // 86400
segundos = segundos % 86400
horas = segundos // 3600
segundos = segundos % 3600
minutos = segundos // 60
segundos = segundos % 60
print("%d dias, %d horas, %d minutos e %d segundos." % (dias, horas, minutos, segundos))

