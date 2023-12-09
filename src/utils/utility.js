import axios from "axios";

export const fetchDataforPriority = async () => {
    try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        const Data = {
            urgent: [],
            high: [],
            medium: [],
            low: [],
            nopriority: [],
        };
        const resData = response.data.tickets;

        resData.forEach((item) => {
            switch (item.priority) {
                case 4:
                    Data.urgent.push(item);
                    break;
                case 3:
                    Data.high.push(item);
                    break;
                case 2:
                    Data.medium.push(item);
                    break;
                case 1:
                    Data.low.push(item);
                    break;
                case 0:
                    Data.nopriority.push(item);
                    break;
                default:
                    break;
            }
        });
        return Data;
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
};


export const fetchDataforStatus = async (OrderingOption) => {
    try {
        const response = await axios.get(
            "https://api.quicksell.co/v1/internal/frontend-assignment"
        );

        const resData = response.data.tickets;
        const Data = {
            backlog: [],
            todo: [],
            inprogress: [],
            done: [],
            cancel: [],
        };

        if (OrderingOption === 'title') {
            resData.sort((a, b) => a.title.localeCompare(b.title));
        } else if (OrderingOption === 'priority') {
            resData.sort((a, b) => b.priority - a.priority);
        }

        resData.forEach((item) => {
            switch (item.status.toLowerCase()) {
                case 'backlog':
                    Data.backlog.push(item);
                    break;
                case 'todo':
                    Data.todo.push(item);
                    break;
                case 'in progress':
                    Data.inprogress.push(item);
                    break;
                case 'done':
                    Data.done.push(item);
                    break;
                case 'cancel':
                    Data.cancel.push(item);
                    break;
                default:
                    break;
            }
        });
        return Data;
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
};


export const fetchDataforUser = async (OrderingOption) => {
    try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        const resDataUsers = response.data.users;
        const resDataTickets = response.data.tickets;
        const usersMap = resDataUsers.reduce((map, user) => {
            map[user.id] = { ...user, tickets: [] };
            return map;
        }, {});

        resDataTickets.forEach((ticket) => {
            const userId = ticket.userId;
            if (usersMap[userId]) {
                usersMap[userId].tickets.push(ticket);
            }
        });

        const updatedUsersWithTickets = Object.values(usersMap);
        if (OrderingOption === 'title') {
            updatedUsersWithTickets.forEach((user) => {
                user.tickets.sort((a, b) => a.title.localeCompare(b.title));
            });
        } else if (OrderingOption === 'priority') {
            updatedUsersWithTickets.forEach((user) => {
                user.tickets.sort((a, b) => b.priority - a.priority);
            });
        }
        return updatedUsersWithTickets;
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
};

