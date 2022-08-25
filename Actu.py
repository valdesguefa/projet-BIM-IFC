import math
def Actu(Ca, T, a, N):
    n0 = T
    CaT = T * Ca
    Actu = 0
    while n0 < N + 1:
        Cta = CaT / (math.pow(1 + a, n0))
        Actu = Actu + Cta
        n0 = n0 + T
    return Actu

print(Actu(0.5,5,4/100,25)/25)#for test

def ActuMR(Ca, T, a, N, TM):
    m=0
    Nm=0
    ActuMR=0
    if int(TM / T) == TM / T :
        ActuMR = Actu(Ca, TM, a, N)
    else:
        while m < N + 1:
            if int((m - 1) / T) == ((m - 1) / T) :
                Nm = 0
            if int(m / TM) == m / TM :
                Nm = Nm + 1
            if 0 < int(m / T) :
                ActuMR = ActuMR + Nm * Ca / (math.pow(1 + a, m))
            m = m + 1
    return ActuMR
print(ActuMR(1,5,0.4/100,25,4))