#

![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/d96cfff2-819f-479e-ae97-e5da9c8ec8c3)

    npm i json-server
    
  
 # 🎀 db.json 파일만들기
![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/6a4fef8d-54bc-4683-b6b7-6904d7d1442b)


# 🎀 가장 root에 db.json 파일생성
![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/f14ee1fd-0992-47b1-85bb-517e8844a985)

# 🎀 db.json 실행하기
![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/9d3f83f7-9ba7-49bf-b603-939ab9b324a2)

*위와 같이 실행하면 port를 3000번을 사용하기 때문에 react와 중복이 된다
*그래서 port를 변경해주어야 한다!

        json-server --watch db.json --port 3004
        
          ❗위 내용이 실행 안되면, 아래내용 terminal에 입력한다
          
        npx json-server --watch db.json --port 3004
