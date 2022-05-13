5 > 4 //true
"apple" > "pineapple"//문자열의 비교는 사전순이므로 "a"는 "p"보다 작아서 false
"2" > "12"//두 피연산자는 문자열이므로 사전순으로 비교된다. 
//첫번째 글자를 비교했을 때 왼쪽 피연산자가 더 크므로 true
undefined == null//true
undefined === null//일치 연산자는 형도 체크한다. false
null == "\n0\n"//동등연산에서 null은 오직 undefined와 같다.
null === +"\n0\n"//형이 다르므로 false
