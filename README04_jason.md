# 🎀 부트스트랩 css cdn 복붙 (public - index.html에)


# app.js 작성
![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/df2603ac-2859-4d99-93dc-98f5a4d8c498)


# 🎀 1) json 서버 연결하기 - 터미널에 작성

![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/d96cfff2-819f-479e-ae97-e5da9c8ec8c3)

    npm i json-server



  
 # 🎀 2) db.json 파일만들기 - vs code(ROOT)에 만듦
![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/6a4fef8d-54bc-4683-b6b7-6904d7d1442b)

* 위 노란내용  db.json 에 붙여넣기

#  가장 root에 db.json 파일생성
![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/f14ee1fd-0992-47b1-85bb-517e8844a985)

*App.js에서 만든 title,body에 내용 작성하고 post 누르면 아래처럼 db.json파일에 값이 넘어옴 ↓↓↓↓↓↓↓
![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/061dd168-8bdd-479c-846d-dd93e3dca472)




# 🎀 4) db.json 실행하기 - terminal 입력
![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/20aa931d-7c91-4670-aff5-e59b31ab4fd1)


*위와 같이 실행하면 기본 리액트는 port를 3000번을 사용하기 때문에 react와 중복이 된다
*그래서 port를 변경해주어야 한다!

![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/ee19e1ce-97bd-45e6-9cb1-820e6c8df6e6)


------------------------------------------------------------------------------------

        json-server --watch db.json --port 3004
        
          ❗위 내용이 실행 안되면, 아래내용 terminal에 입력한다
          
        npx json-server --watch db.json --port 3004
        
-------------------------------------------------------------------------------------        
        
        
        
 # 🎀 5) 서버와 통신하기 (npm axios) - 터미널 새창열기!
 
 ![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/82248f7f-0129-4043-93c0-300000a2afd7)
 
        npm i axios
        
        
 *terminal에서 새창 열어서 위 내용 복붙 --> db.json 연결끊지 않고 해야하기 때문!!
 ![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/48fd60d0-2dff-4a7c-8075-4ead3b0da706)


# package.json - Debug칸에 

        "db":"npx json-server --watch db.json --port 3004" 작성

![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/6c051f6a-d69c-4c5a-ae55-5173ca85a9cb)



# App.js 상단에 복붙 - (axios 연결)

 *import axios 먼저하기
 
![image](https://github.com/YENAZIGMINA/react_basic/assets/129706758/74e2ed25-37a2-4d18-bcca-9d2dd00af434)




        const onSubmit = () => {
        
        ✔axios.post 작성하고
        ✔db.json의 터미널 Resources 주소 복붙 "http://localhost:3004/posts"
         +++)Resources 주소 ctrl + 클릭하면 port 3004 크롬창 켜짐
        
        axios.post("http://localhost:3004/posts", {
         title: title,
         body: body,
          });
         };
         
         ✔title, body 작성
