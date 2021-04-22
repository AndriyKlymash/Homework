// зробити свій розпорядок дня на callback, promise, async await (від 7 до 10 дій). Все має бути синхронізовано
//callback hell
// function wakeUp(isWakeUp, cb) {
//     setTimeout(() => {
//         if (isWakeUp) {
//             console.log('Good morning');
//             cb(null, 'You woke up')
//         } else {
//             cb('You are not wake up, sweet dreams')
//         }
//     }, 1000)
// }
//
// function brushTeeth(isTeethClean, cb) {
//     setTimeout(() => {
//         if (isTeethClean) {
//             console.log('I want to teeth clean');
//             cb(null, 'You teeth clean')
//         } else {
//             cb('You didnt brush your teeth')
//         }
//     }, 100)
// }
//
// function goExersize(isExerciseDo, cb) {
//     setTimeout(() => {
//         if (isExerciseDo) {
//             cb(null, 'Exercise is done you can go eat')
//         } else {
//             cb('You are lazy to exercise')
//         }
//     }, 300)
// }
//
// function goBreakfast(isBreakfastGo, cb) {
//     setTimeout(() => {
//         if (isBreakfastGo) {
//             console.log('I am hungry')
//             cb(null, 'Om nom nom')
//         } else {
//             cb('You dont eat')
//         }
//     }, 220)
// }
//
// function wentToLecture(isWentToLecture, cb) {
//     setTimeout(() => {
//         if (isWentToLecture) {
//             cb(null, 'You are rock, learning is good');
//         } else {
//             cb('Study! or be nobody');
//         }
//     }, 800)
// }
//
// function doHomework(isHomeworkDo, cb) {
//     setTimeout(() => {
//         if (isHomeworkDo) {
//             cb(null, 'Well done, I did my homework');
//         } else {
//             cb('You didnt homework try again');
//         }
//     }, 900)
// }
//
// function goToBed(isGoToBed, cb) {
//     setTimeout(() => {
//         if (isGoToBed) {
//             cb(null, 'All the work is done, you can go to sleep')
//         } else {
//             cb('You didnt do all the work')
//         }
//     }, 630)
// }
//
// wakeUp(true, (err, date) => {
//     if (!err) {
//         console.log(date);
//         brushTeeth(true, (err, date) => {
//             if (!err) {
//                 console.log(date);
//                 goExersize(true, (err, date) => {
//                     if (!err) {
//                         console.log(date);
//                         goBreakfast(true, (err, date) => {
//                             if (!err) {
//                                 console.log(date);
//                                 wentToLecture(true, (err, date) => {
//                                     if (!err) {
//                                         console.log(date);
//                                         doHomework(true, (err, date) => {
//                                             if (!err) {
//                                                 console.log(date);
//                                                 goToBed(true, (err, date) => {
//                                                     if (!err) {
//                                                         console.log(date);
//                                                         console.log('Goodbye')
//                                                     } else {
//                                                         console.log(err);
//                                                     }
//                                                 })
//                                             } else {
//                                                 console.log(err);
//                                             }
//                                         })
//                                     } else {
//                                         console.log(err);
//                                     }
//                                 })
//                             } else {
//                                 console.log(err);
//                             }
//                         })
//                     } else {
//                         console.log(err);
//                     }
//                 })
//             } else {
//                 console.log(err);
//             }
//         })
//     } else {
//         console.log(err);
//     }
//
// })

//promise
function wakeUp(isWakeUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWakeUp) {
                console.log('Good morning');
                resolve('You woke up');
            } else {
                reject('You are not wake up, sweet dreams');
            }
        }, 1000)
    })
}

function brushTeeth(isTeethClean) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isTeethClean) {
                console.log('I want to teeth clean');
                resolve('You teeth clean');
            } else {
                reject('You didnt brush your teeth');
            }
        }, 100)
    })
}


function goExercise(isExerciseDo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isExerciseDo) {
                resolve('Exercise is done you can go eat');
            } else {
                reject('You are lazy to exercise');
            }
        }, 300)
    })
}


function goBreakfast(isBreakfastGo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isBreakfastGo) {
                console.log('I am hungry')
                resolve('Om nom nom');
            } else {
                reject('You dont eat')
            }
        }, 220)
    })
}

function wentToLecture(isWentToLecture) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWentToLecture) {
                resolve('You are rock, learning is good');
            } else {
                reject('Study! or be nobody');
            }
        }, 800)
    })
}

function doHomework(isHomeworkDo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isHomeworkDo) {
                resolve('Well done, I did my homework');
            } else {
                reject('You didnt homework try again');
            }
        }, 900)
    })
}

function goToBed(isGoToBed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isGoToBed) {
                resolve('All the work is done, you can go to sleep');
            } else {
                reject('You didnt do all the work')
            }
        }, 630)
    })
}

wakeUp(true)
    .then(value => {
        console.log(value);
        return brushTeeth(value);
    })
    .then(value => {
        console.log(value);
        return goExercise(value);
    })
    .then(value => {
        console.log(value);
        return goBreakfast(value);
    })
    .then(value => {
        console.log(value)
        return wentToLecture(value);
    })
    .then(value => {
        console.log(value);
        return doHomework(value);
    })
    .then(value => {
    console.log(value);
    return goToBed(value)
    })
    .then(final => {
        console.log(final);
        console.log('Goodbye!')
    })
    .catch(reason => {
        console.log(reason);
    })

async function myWorkingDay() {
    try {
        let wake = await wakeUp(true);
        console.log(wake);
        let teeth = await brushTeeth(true);
        console.log(teeth);
        let exercise = await goExercise(true);
        console.log(exercise);
        let breakfast = await goBreakfast(true);
        console.log(breakfast);
        let lecture = await wentToLecture(true);
        console.log(lecture);
        let homework = await doHomework(true);
        console.log(homework);
        let bed = await goToBed(true);
        console.log(bed);
    } catch (eror) {
        console.log(eror);
    }
}

myWorkingDay()