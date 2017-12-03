import subprocess
import time
import signal
import os
import sys
p = None
state = "t"

def play(filename):
    global p
    stop()
    p = subprocess.Popen(["mpg123", filename])

def stop():
    global p
    global state
    if p:
        p.terminate()
        state = "f"
    p = None

def pause():
    global p
    if p:
        os.kill(p.pid, signal.SIGSTOP)
        time.sleep(5)
        os.kill(p.pid, signal.SIGCONT)

def checkstate(file):
    global p 
    fname=open(file,'r')
    line = fname.readline()
    if(line[0]=='p'):
        pause()
    elif(line[0] == 'c'):
        pass
    else:
        fname.close()
        fname=open(file,'w')
        fname.write("continue")    
        stop()
    fname.close() 


def main(argv):
    
    musicurl = argv[1]
    play(musicurl)
    while(state!="f"):
        checkstate("public/musicstate.txt")
        time.sleep(0.1)
    # time.sleep(10)
    # pause()
    # time.sleep(20)
    # stop()
    # fname=open("public/musicstate.txt",'r')
    # line = fname.readline()
    # fname.close()

    # test
    # fname=open('pythontest.txt','w')
    # fname.write(line[0])
    # fname.close()



if __name__ == '__main__':
    main(sys.argv)
