
        //My Functions || PART01
        var input;
        function validateInt() {
            do {
                input = prompt("Enter The value of index : " + i);
            } while (input.trim() === "" || input === null || isNaN(input) || Number.isInteger(input));
            return Number(input);
        }

        function RemoveDuplicates(arr) {
            for (var i = 0; i < arr.length; i++) {
                for (var j = i + 1; j < arr.length; j++) {
                    if (arr[i] == arr[j]) {
                        arr.splice(j, 1);
                        j--;
                    }
                }
            }
        }

        function NumbersGreaterThan50(arr) {
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] > 50)
                    newArr.push(arr[i]);
            }
            return newArr;
        }

        //Approach01
        function getMax(arr) {
            var max = arr[0];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] > max)
                    max = arr[i];
            }
            return max;
        }

        function getMin(arr) {
            var min = arr[0];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] < min)
                    min = arr[i];
            }
            return min;
        }

        //Eval
        function sumAll(arr) {
            var sum = eval(arr.join("+"));
            return sum;
        }
        function productAll(arr) {
            var sum = eval(arr.join("*"));
            return sum;
        }

        //Args
        function sumAllArgs() {
            var args = Array.from(arguments);

            var sum = eval(args.join("+"));
            return sum;
        }
        function productAllArgs() {
            var args = Array.from(arguments);

            var product = eval(args.join("*"));
            return product;
        }
        //==========================================================


        //PART01
        //==================================
        var arr = [];
        do {
            var length = prompt("Enter The Length: ");
        } while (Number(length) <=0 ||length.trim() === "" || length === null || isNaN(length) || Number.isInteger(length));
        arr.length = length;


        for (var i = 0; i < arr.length; i++) {
            arr[i] = validateInt();
        }

        //================================================
        console.log("Array Before Remove Duplicates => ");
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);

        }

        //Remove
        RemoveDuplicates(arr);

        console.log("Array After Remove Duplicates => ");
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }


        //Sort ASC

        arr.sort(
            function (a, b) {
                return a - b;
            }
        );

        console.log("Array After Sort ASC => ");
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }

        //Numbers Greater Than 50 [My Function]
        var NewArr = NumbersGreaterThan50(arr);

        console.log("Array Of Numbers Greater Than 50[Using MyFunction] => ");
        for (var i = 0; i < NewArr.length; i++) {
            console.log(NewArr[i]);
        }

        //Numbers Greater Than 50 [Built in method]
        var newArrBuiltIn = arr.filter(
            function (num) {
                return num > 50
            }
        );

        console.log("Array Of Numbers Greater Than 50 [Using BuiltInFunction] => ");
        for (var i = 0; i < newArrBuiltIn.length; i++) {
            console.log(newArrBuiltIn[i]);
        }

        //Print Arr
        console.log("The Array => ");
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }

        //Max&Min [Approach 01]
        //Print Max 
        var maximum01 = getMax(arr);
        console.log(`Max01 = ${maximum01}`);

        //Print Min 
        var minimum01 = getMin(arr);
        console.log(`Min01 = ${minimum01}`);

        //===========================

        //Max&Min [Approach 02]
        arr.sort(
            function (a, b) {
                return a - b;
            }
        );

        var maximum02 = arr[arr.length - 1];
        var minimum02 = arr[0];

        //Print Max 
        console.log(`Max02 = ${maximum02}`);

        //Print Min 
        var minimum02 = getMin(arr);
        console.log(`Min02 = ${minimum02}`);


        //=======================================
        //Q02 - EVAL ONLY
        var sumAllArr = sumAll([1, 2, 3, 4, 5]);
        console.log(`Sum With Eval => ${sumAllArr}`);

        var productAllArr = productAll([1, 2, 3, 4, 5]);
        console.log(`Product With Eval => ${productAllArr}`);

        //Eval With Args
        var sumAllArguments = sumAllArgs(1,2,3,4,5,6,7,8,9,10);
        console.log(`Sum With Eval&Args => ${sumAllArguments}`);

        var productAllArguments = productAllArgs(1,2,3,4,5,6,7,8,9,10);
        console.log(`Product With Eval&Args => ${productAllArguments}`);
        //================================================================



        //PART02
        //Q01
        do {
            var str = prompt(`Enter a String: `);

        } while (str == null || str.trim() === "" || !isNaN(str));

        var output = str.trim().split(/\s+/);


        for(var i = 0;i<output.length;i++){
            output[i] =  output[i][0].toUpperCase()+output[i].slice(1);
        }

        console.log(output.join(" "));

        //Q02
        do {
            var str = prompt(`Enter a String: `);

        } while (str == null || str.trim() === "" || !isNaN(str));

        var output = str.trim().split(/\s+/);


        var longestLength = output[0].length;
        var longestWord = output[0];
        for (var i = 0; i < output.length; i++) {
            var count = 0;
            for (var j = 0; j < output[i].length; j++) {
                count++;
            }
            if (count > longestLength) {
                longestLength = count;
                longestWord = output[i];
            }
        }

        console.log(longestWord);

        //Part03 => map every reduce from find

        //01 - map() => Creates a new array by applying a function to each element & Original array doesn’t change.
        var numbers = [1, 2, 3, 4];
        var doubled = numbers.map(num => num * 2);

        console.log(doubled); // [2, 4, 6, 8]

        //02 - every() => Checks if all elements satisfy a condition - Returns true or false - If even one element fails → result is false.
        var ages = [20, 25, 30];
        var allAdults = ages.every(age => age >= 18);

        console.log(allAdults); // true

        //03 - reduce() => Reduces an array to a single value by applying a function repeatedly. - 
        var nums = [1, 2, 3, 4];
        var sum = nums.reduce((acc, curr) => acc + curr, 0);//0 is the value of accumulator

        console.log(sum); // 10

        //acc → accumulator (starts at 0 here).
        //curr → current value.
        //Returns one final result.

        //04 - from() => Creates a new array from array-like or iterable objects.
        var str03 = "hello";
        var arr03 = Array.from(str03);

        console.log(arr03); // ['h', 'e', 'l', 'l', 'o']

        //Also lets you transform while creating:
        var arr04 = Array.from([1, 2, 3], x => x * 2);
        console.log(arr04); // [2, 4, 6]

        //05 - find() => Returns the first element that matches a condition. - If no element matches → returns undefined.
        var numbers05 = [5, 10, 15, 20];
        var firstBig = numbers05.find(num => num > 12);

        console.log(firstBig); // 15