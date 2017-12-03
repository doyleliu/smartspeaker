import subprocess
import time
import signal
import os
import sys
p = None

def play(filename):
    global p
    stop()
    p = subprocess.Popen(["mpg123", filename])

def stop():
    global p
    if p:
        p.terminate()
    p = None

def pause():
    global p
    if p:
        os.kill(p.pid, signal.SIGSTOP)
        time.sleep(5)
        os.kill(p.pid, signal.SIGCONT)



def main(argv):
    # musicurl = "http://m10.music.126.net/20171128214438/e1caaaa2ed1c695de66290a3c6cd9c4c/ymusic/7688/973b/9f59/ce5056aa11baaf903a68dfa513f47949.mp3"
    musicurl = argv
    play(musicurl)
    # time1 = time.time()
    # time2 = time.time()
    # while(time2 - time1 < 10):
    #     print(time2 - time1)
    time.sleep(10)
    pause()
    time.sleep(20)
    stop()



if __name__ == '__main__':
    main(sys.argv)
