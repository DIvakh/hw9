const notification = [
    {
        app: 'telegram',
        message: 'Some text message',
        sender: 'Ivan Petrov',
        date: '31/07/2019',
    },
    {
        app: 'telegram',
        message: 'Some memes',
        sender: 'Ivan Petrov',
        date: '31/07/2019',
    },
    {
        app: 'instagram',
        message: 'Some boring crap',
        sender: 'Ivan Petrov',
        date: '31/07/2019',
    },

    {
        app: 'instagram',
        message: 'Some spam',
        sender: 'Petr Ivanov',
        date: '31/07/2019',
    },

    {
        app: 'facebook',
        message: 'Apple Spas congratulations!',
        sender: 'Petr Ivanov',
        date: '31/07/2019',
    },
    {
        app: 'instagram',
        message: 'Some spam',
        sender: 'Petr Ivanov',
        date: '30/07/2019',
    },
    {
        app: 'instagram',
        message: 'Some spam',
        sender: 'Petr Ivanov',
        date: '31/07/2019',
    },
    {
        app: 'facebook',
        message: 'Some facebook text',
        sender: 'Petr Ivanov',
        date: '30/07/2019',
    },
];
function getProperty(arr, property) {
    return arr.map(item => item[property]);
}
function newUniq(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
function groupingArray(arrObjects, property) {
    const resultArray = [];

    const arrProperty = getProperty(arrObjects, property);
    const arrUniqueProperty = newUniq(arrProperty);

    for (let i = 0; i < arrUniqueProperty.length; i++) {
        const partResultArray = arrObjects.filter(item => item[property] === arrUniqueProperty[i]);
        resultArray.push(partResultArray);
    }
    return resultArray;
}

function groupingNotification(arrNotification, property) {
    const resultObject = {};

    const arrProperty = getProperty(arrNotification, property);
    const arrUniqueProperty = newUniq(arrProperty);

    for (let i = 0; i < arrUniqueProperty.length; i++) {
        resultObject[arrUniqueProperty[i]] = arrNotification.filter(item => item[property] === arrUniqueProperty[i]);
    }

    return resultObject;
}

function doubleGroupingNotification(objNotification, property) {
    const resultObj = {};

    for (const key in objNotification) {
        resultObj[key] = groupingArray(objNotification[key], property);
    }

    return resultObj;
}

const resultGroup = groupingNotification(notification, 'app');

doubleGroupingNotification(resultGroup, 'sender');
