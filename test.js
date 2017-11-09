function load() {
    document.write("merol!");

    var my_null;
    if (my_null == null) {
        document.write("is null");
    }

    var other_null;
    if (other_null === undefined) {
        document.write("is undefined");
    }

    //Ask Dan how to use style?
    document.getElementById('one').style = ".two";

    //How to pass this?
    document.querySelectorAll('h2')[0].addEventListener('click', () => {
        var h2 = document.querySelectorAll('h2')[0];
        if (h2.style.backgroundColor == "cyan") {
            h2.style.backgroundColor = "blue";
        }
        else {
            h2.style.backgroundColor = "cyan";
        }
    });

    linkedin_test();
}

function linkedin_test(){
    var data = [
        { skill: 'css', user: 'A' },
        { skill: 'css', user: 'B' },
        { skill: 'javascript', user: 'A' },
        { skill: 'javascript', user: 'C' },
        { skill: 'css', user: 'C' },
        { skill: 'css', user: 'D' },
        { skill: 'html5', user: 'A' },
        { skill: 'html5', user: 'D' },
        { skill: 'html5', user: 'E' },
    ];

    function getDataSum(data) {
        var map = new Map();
        data.forEach(function (e) {
            if (map.get(e.skill) !== undefined) {
                var ob = map.get(e.skill);
                var users = ob.users;
                users.push(e.user);
                map.set(e.skill, { 'skill': e.skill, 'users': users, 'count': users.length });
            }
            else {
                var users = [];
                users.push(e.user);
                map.set(e.skill, { 'skill': e.skill, 'users': users, 'count': users.length });
            }
        });
        return map;
    }

    function printRes() {
        var datas = getDataSum(data);
        let str = '[ <br>';
        for (var key of datas.keys()) {
            str += `${JSON.stringify(datas.get(key))} <br>`;
        }
        str += ']';
        return str;
    }

    var last = document.getElementById('last');
    last.innerHTML = printRes();
}