(function () {
  "use strict";

  describe("끝판왕 깨기 👑", function () {
    describe("코드 에디터에서 homeworks/5_advanced.js 파일을 열어주세요.", function () {
      /*
       *
       * 단순히 정답을 맞추는 것이 아닌, 이유를 정확히 아는 것이 가장 중요합니다. 💁🏻‍♂️
       *
       */

      it("객체 키 밸류에서 키에 함수 실행문 할당할 경우", function () {
        const puzzle = {};

        function sayHello(num) {
          console.log(num);
        }

        puzzle[sayHello(1)] = 1;
        puzzle[sayHello(2)] = 2;

        const result = puzzle;
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("함수에 중첩된 객체가 인자로 주어지는 경우", function () {
        const student = {
          name: "jj",
          age: 20,
          grades: {
            math: 70,
            science: 85,
            history: 92,
          },
        };

        function getPassedSubjects(student) {
          const passedSubjects = [];

          for (const subject in student.grades) {
            if (student.grades[subject] >= 80) {
              passedSubjects.push(subject);
            }
          }

          return passedSubjects;
        }

        const result = getPassedSubjects(student);
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("배열의 요소로 함수가 있을 때", function () {
        function double(x) {
          return x * 2;
        }

        function square(y) {
          return y * y;
        }

        function subtractFive(z) {
          return z - 5;
        }

        const functionArray = [double, square, subtractFive];

        const result = functionArray[2](functionArray[1](3));
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("배열 안에 객체가 요소로 있는 경우", function () {
        const arr = [
          {
            name: "ken",
            job: "ceo",
          },
          {
            name: "leo",
            job: "pm",
          },
          {
            name: "dd",
            job: "designer",
          },
        ];

        for (let i = 0; i < arr.length; i++) {
          if (arr[i].name.length >= 3) {
            arr[i].job = "software engineer";
          }
        }

        const result = arr[2].job;
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("객체 키 밸류에서 밸류가 배열인 경우", function () {
        function calculateTotalProfit(account) {
          let totalProfit = 0;

          for (let i = 0; i < account.portfolio.length; i++) {
            totalProfit += account.portfolio[i].profit;
          }

          return totalProfit;
        }

        const account = {
          name: "ken",
          portfolio: [
            {
              name: "samsung",
              profit: -200,
            },
            {
              name: "apple",
              profit: 1000,
            },
            {
              name: "nike",
              profit: 100,
            },
          ],
        };

        const result = calculateTotalProfit(account);
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("배열 요소 중간에서 빼기", function () {
        /* (참고) Math.floor (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
        const a = Math.floor(2.1); // 2
        const b = Math.floor(2.6); // 2
         */

        const result = [1, 2, 3];
        const midIndex = Math.floor(result.length / 2);

        result.splice(midIndex, 1);

        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("배열 앞에서부터 하나씩 순회하기", function () {
        const arr = [4, 9, 12];
        let result;

        for (let i = 0; i < arr.length; i++) {
          if (i % 2 === 1) {
            result = arr[i];
          }
        }

        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("배열 뒤에서부터 하나씩 순회하기", function () {
        const arr = ["h", "e", "l", "l", "o"];

        function reverseArr(arr) {
          const newArr = [];

          for (let i = arr.length - 1; i >= 0; i--) {
            newArr.push(arr[i]);
          }

          return newArr;
        }

        const result = reverseArr(arr);
        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("배열 앞에서부터 두개씩 순회하기", function () {
        const arr = [1, 4, 5, 8, 9, 12, 15];
        const result = [];

        for (let i = 0; i < arr.length; i++) {
          if (i % 2 == 0) {
            result.push(arr[i]);
          }
        }

        const guess = 바코;

        expect(result).to.eql(guess);
      });

      it("배열 뒤에서부터 두개씩 순회하기", function () {
        const arr = [1, 4, 5, 8, 9, 12, 15];
        const result = [];

        for (let i = arr.length - 1; i >= 0; i--) {
          if (i % 2 == 0) {
            result.push(arr[i]);
          }
        }

        const guess = 바코;

        expect(result).to.eql(guess);
      });
    });
  });
})();
