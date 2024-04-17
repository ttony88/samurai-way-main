export const state = {
    profilePage: {
        posts: [
            {id: '1', text: "Hello how are you", countLike: 4},
            {id: '2', text: "I'm Anton", countLike: 2}
        ]
    },
    messagePage: {
        dialogs: [
            {id: '1', title: 'Anton'},
            {id: '2', title: 'Dasha'},
            {id: '3', title: 'Sava'},
            {id: '4', title: 'Rita'},
        ],
        
        messages: [
            {id: '1', text: 'hi!'},
            {id: '2', text: 'hi, how are you?'},
            {id: '3', text: 'good'},
        ],
    },
    sideBar: {
        myFriends: [
            {id: '1', name: 'Anton'},
            {id: '2', name: 'Dasha'},
            {id: '3', name: 'Sava'},
            {id: '4', name: 'Rita'},
        ]
    }
}


  
  