#How Components, Props, and State Work in the Tic-Tac-Toe App

##Components:
Our app is has 3 components:

- Game = manages the overall state and history
- Board = displays the squares grid
- Square = individual squares on board

Each component is reusable, meaning we can essentially can create many tic tac toe game boards.

##Props:
Our Game comp passes the current board's state and player-turns to Board comp. The Board comp sends the indie square values & onClick handlers to each Square. This makes data flow down while clicks trigger updates.

##State:
Game component holds main state that tracks the history of our games moves and the current move. When a player clicks a square placing X or O, a new state is created and triggers a re-render. This lets tracking turns and time travel (going back to a previous move) possible while keeping the app responsive.
