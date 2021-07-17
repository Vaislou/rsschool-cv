1. Alexey Kanapatski
2. Contacts: 
  * tel: +375 (29) 873-42-28
  * email: vaislou@gmail.com
3. Some info
  * Age: 22 y.o.
  * Education: BSUIR (2015-2019)
  * Work: engineer in Department for Safety and Security (2019 - now)
  * Target: Front-end (fullstack) developer
  * Dream: Game-developer
4. CSS3/HTML5, JavaScript, Bootstrap 4(5), SASS/SCSS, GULP, BEM
5. Projects from other "schools" 
  * https://github.com/Vaislou/vaislou.github.io
  * Some code from codewars
    * Sum Strings as Numbers (4kyu)
    ```
        function sumStrings(a,b) { 
            let result = [];
            let arr1 = a.split('');
            let arr2 = b.split('');
            let min = arr1.length - arr2.length;
            if (min < 0) {
                min *= -1;
                for (let i = 0; i < min; i++) {
                arr1.unshift(0);
                }
            } else if (min > 0) {
                for (let i = 0; i < min; i++) {
                arr2.unshift(0);
                }
            }
            for (let i = 0; i < arr1.length; i++) {
                arr1[i] = Number(arr1[i]);
                arr2[i] = Number(arr2[i]);
            }
            arr1.reverse();
            arr2.reverse();
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] + arr2[i] > 9) {
                result.push(arr1[i] + arr2[i] - 10);
                if (i == arr1.length - 1) {
                    result.push(1);
                } else {
                    arr1[i+1] += 1;
                }
                } else {
                result.push(arr1[i] + arr2[i]);
                }
            }
            result.reverse();
            if (result[0] == 0) {
                result.splice(0, 1);
            }
            return result.join('');
        }
    ```

6. Only courses by BeonMax ('_Front-End Dev 2021_', '_JavaScript for Beginners_', '_HTML&CSS for Beginners_')
7. Junior(Intern)
8. Did not pass any tests, but communicate with peoples from other countries (games) and talk with thems on English