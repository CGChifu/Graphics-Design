


# for i in range(100):
#     print((i)**2 + i +41)
    
def isPrime(n):
    if n == 2 or n == 3: return True
    if n < 2 or n%2 == 0: return False
    if n < 9: return True
    if n%3 == 0: return False
    r = int(n ** 0.5 )
    f = 5
    while f <= r:

        # for every value of n> 3 6n + 1 and 6n - 1 is a prime number. 
        # print('\t', f)
        # print ( f, r , n )
        if n % f == 0 : return False
        if n % (f+2) == 0: return False
        f+= 6
    return True


def trfa(n):
    if isPrime(n):
        return(f"{n} is prime")
    else:
        return(f"{n} is not prime")

for i in range(100):
    print( trfa((i)**2 + i +41))

print(trfa(7))

# n = 253
# print(n**0.5)
# print(isPrime(n))

# print(int(76 ** 0.5))


# print(10%4) #remainder 
# print(7//5)