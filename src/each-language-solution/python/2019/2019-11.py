
def _20191101():
    for i in range(1,21):
        print('apple'[i%3*5::]+'orange'[i%5*6::] or i,end=" , ")
        