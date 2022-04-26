from multiprocessing import Process
from concurrent.futures import ProcessPoolExecutor
import requests

url = 'http://localhost:8080/addAppointment'
def f(i):
    data = {"deptID":2,"patientID":i,"doctorID":3,"date":'2022-04-29',"time":'m'}
    res = requests.post(url,data=data)
    
    return eval(res.text)


if __name__ == '__main__':
    # Default value of max_workers is min(32, os.cpu_count() + 4).
    
    with open("./response.txt", "w") as file:
        with ProcessPoolExecutor() as executor:
            results = executor.map(f, list(range(100)))
            for i in results:
                file.write(str(i)+"\n")
    