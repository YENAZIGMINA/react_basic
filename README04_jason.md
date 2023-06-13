# 🎀 부트스트랩 css cdn 복붙 (public - index.html에)



# 🎀 1) json 서버 연결하기

![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/d96cfff2-819f-479e-ae97-e5da9c8ec8c3)

    npm i json-server



  
 # 🎀 2) db.json 파일만들기 - vs code에 만듦
![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/6a4fef8d-54bc-4683-b6b7-6904d7d1442b)




# 🎀 3) 가장 root에 db.json 파일생성
![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/f14ee1fd-0992-47b1-85bb-517e8844a985)



# 🎀 4) db.json 실행하기 - terminal 입력
![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/9d3f83f7-9ba7-49bf-b603-939ab9b324a2)

*위와 같이 실행하면 port를 3000번을 사용하기 때문에 react와 중복이 된다
*그래서 port를 변경해주어야 한다!

        json-server --watch db.json --port 3004
        
          ❗위 내용이 실행 안되면, 아래내용 terminal에 입력한다
          
        npx json-server --watch db.json --port 3004
        
        
        
        
 # 🎀 5) 서버와 통신하기 (npm axios)
 ![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/82248f7f-0129-4043-93c0-300000a2afd7)
 
        npm i axios
        
        
 *terminal에서 새창 열어서 위 내용 복붙 --> db.json 연결끊지 않고 해야하기 때문!!
 ![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/48fd60d0-2dff-4a7c-8075-4ead3b0da706)


*App.js 상단에 복붙
![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/f5954cff-0685-495d-b807-61cc1936069c)

*
![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/a854000d-0684-4d65-b05b-ac82c87bf5a7)

        const onSubmit = () => {
        
        ✔axios.post 작성하고
        ✔db.json의 터미널 Resources 주소 복붙 "http://localhost:3004/posts"
        
        axios.post("http://localhost:3004/posts", {
         title: title,
         body: body,
          });
         };
         
         ✔title, body 작성
