(function () {
  "use strict";

  describe("함수 다루기 🟢 ⚫️", function () {
    describe("코드 에디터에서 homeworks/3_function.js 파일을 열어주세요.", function () {
      /*
       *
       * 단순히 정답을 맞추는 것이 아닌, 이유를 정확히 아는 것이 가장 중요합니다. 💁🏻‍♂️
       *
       */

      it("함수 반환문이 없을때의 반환값", function () {
        function foo() {}

        const result = foo();
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("함수 반환문이 없을때의 반환값", function () {
        function sayHello() {
          console.log("Hello, World!");
        }

        const result = sayHello();
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("함수 인자는 있고, 반환문은 없을 때의 반환값", function () {
        function sayHello(name) {
          console.log(`Hello, ${name}`);
        }

        const result = sayHello();
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("함수 반환문이 있을 때의 반환값", function () {
        function foo() {
          return NaN || 7;
        }

        const result = foo();
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("함수 인자와 반환문이 있을 때의 반환값", function () {
        function add(x, y) {
          return x + y;
        }

        const result = add(1, 5);
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("함수 인자와 반환문이 있을 때의 반환값", function () {
        function echo(word, times) {
          return word.repeat(times);
        }

        const result = echo("수박", 3);
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("함수 실행문과 연산자", function () {
        function sayHello() {
          console.log("Hello");
        }

        const result = sayHello() && "vaco";
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("함수 내에 조건문이 있을 때의 반환 값", function () {
        function isPositive(num) {
          if (num > 0) {
            return true;
          }

          return false;
        }

        const result = isPositive(1);
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("함수 내에 조건문이 있을 때의 반환 값", function () {
        function getGrade(score) {
          if (score >= 90) {
            return "A";
          } else if (score >= 80) {
            return "B";
          } else {
            return "C";
          }
        }

        const result = getGrade(80);
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("함수 내에 반복문이 있고 반복문 내부에서 조건문에 따라서 반환할 때 반환값", function () {
        function countEven(numbers) {
          let count = 0;

          for (let i = 0; i < numbers.length; i++) {
            if (num % 2 == 0) {
              count++;
            }
          }

          return count;
        }

        const result = countEven([1, 2, 3, 4, 5, 6]);
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("함수 내에 반복문이 있고 반복문 내부에서 조건문에 따라서 반환할 때 반환값", function () {
        function countNotKen(names) {
          let count = names.length;

          for (let i = 0; i < names.length; i++) {
            if (names[i] != "ken") {
              count--;
            }
          }

          return count;
        }

        const result = countNotKen(["ken", "kenny", "kony", "ken", "ken"]);
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("배열의 요소로서 함수 실행문이 사용됐을 때 배열의 결과", function () {
        function combineValues(a, b) {
          return a + b;
        }

        const result = [combineValues("a", "bc"), combineValues("d", "ef")];
        const guess = 바코;

        expect(result[1]).to.eql(guess);
      });

      it("문자열 템플릿 리터럴 내에 함수 실행문이 사용됐을때 문자열의 결과", function () {
        function sayWord(word) {
          return word;
        }

        const result = `Hello, ${sayWord("World")}`;
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("함수 내에 있는 조건문의 조건으로 또 다른 함수 실행문이 사용됐을때 함수의 결과", function () {
        function divideByTwo(num) {
          return num * 2;
        }

        function square(num) {
          return num * num;
        }

        function calculate(x) {
          if (x > 0) {
            return square(x);
          } else {
            return divideByTwo(x);
          }
        }

        const result = calculate(5);
        const guess = 바코;

        expect(result).to.eql(guess);
      });
    });
  });
})();
