const inquirer = require("inquirer");

const friendInfo = [];
const choreInfo = [];
const scheduleInfo =[];

//
const launch_cli = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "toDoAction",
            message: "What would you like to do?",
            // This should cover full CRUD functionality
            choices: [
                "1. Add single roommate to chore list",
                "2. Add batch of roommates",
                "3. Add a chore",
                "4. Add chore duty",
                "5. Set up schedule",
                new inquirer.Separator(),
                "Exit"
            ]
        }
    ]).then(listSelection => {
        switch(listSelection.toDoAction[0]) {
            case "1":
                gatherRoomieInfo(1, 1);
                break;
            case "2":
                collectMultiRommieInfo();
                break;
            case "3":
                addChore();
                break;
            case "4":
                addChoreDuty();
                break;
            case "5":
                setUpSchedule();
                break;
            default:
                console.log("Goodbye!");
        }
    });
}

launch_cli();

//
const collectMultiRommieInfo = () => {      
    inquirer.prompt([
        {
            type: "number",
            name: "numRoomies",
            message: "How many roommates do you need to add to the chore schedule?"
        }
    ]).then(async answer => {
        await gatherRoomieInfo(answer.numRoomies, 1);
    });
}

//
const gatherRoomieInfo = async (numberOfRoomies, count) => {
    if (numberOfRoomies > 0) {
        await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: `Please enter the name for roommate #${count}`
            },
            {
                type: "input",
                name: "phone",
                message: `Please enter the phone number for roommate #${count}`
            }
        ]).then(answerObj => {
            friendInfo.push({name: answerObj.name, phone: answerObj.phone});
        });
        gatherRoomieInfo(numberOfRoomies - 1, count + 1);
    } else {
        console.log(friendInfo);
    }
}

//
const addChore = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "choreName",
            message: "Which chore would you like to add? (e.g. 'bathroom duty')"
        }
    ]).then(answer => {
        console.log(answer);
        inquirer.prompt([
            {
                type: "confirm",
                name: "addDuty",
                message: "Would you like to add a duty to this chore?"
            }
        ]).then(addDutyRes => {
            console.log(addDutyRes);
        });
    });
}

//
const addChoreDuty = () => {
    
}

//
const setUpSchedule = () => {
    
}


