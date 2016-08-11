# police-and-treasure   

Hi, my friend, we have a map which is represented by a two-dimensional array.   
`0` represent normal road.  
`1` represent wall, which we can't walk to it for sure.  
`2` represent the priceless treasure.  
`3` represent the police.  

For example:  
```
[
  [0, 0, 1],
  [2, 0, 3],
  [2, 0, 3]
]
```
The police can walk up, down, left and right.  
We need find solution to find out the nearest treasure for each police.   

Environment: node v6.2.0   
Result of running this program:
```
*********************
Test case 1:
[ 0, 0, 1 ]
[ 2, 0, 3 ]
[ 2, 0, 3 ]
Result:
[ { policePos: { y: 1, x: 2 }, treasurePos: { x: 0, y: 1 } },
  { policePos: { y: 2, x: 2 }, treasurePos: { x: 0, y: 2 } } ]
*********************
Test case 2:
[ 0, 0, 1, 0, 0 ]
[ 2, 0, 1, 1, 3 ]
[ 2, 0, 0, 0, 3 ]
Result:
[ { policePos: { y: 1, x: 4 }, treasurePos: { x: 0, y: 2 } },
  { policePos: { y: 2, x: 4 }, treasurePos: { x: 0, y: 2 } } ]
*********************
Test case 3:
[ 0, 0, 1, 0, 0 ]
[ 2, 0, 1, 1, 3 ]
[ 2, 0, 0, 0, 3 ]
[ 1, 0, 0, 1, 1 ]
[ 1, 0, 0, 1, 3 ]
Result:
[ { policePos: { y: 1, x: 4 }, treasurePos: { x: 0, y: 2 } },
  { policePos: { y: 2, x: 4 }, treasurePos: { x: 0, y: 2 } },
  { policePos: { y: 4, x: 4 }, treasurePos: undefined } ]
*********************
Test case 4:
[ 0, 0, 1, 0, 0 ]
[ 1, 0, 1, 1, 3 ]
[ 1, 0, 0, 0, 3 ]
[ 1, 0, 0, 1, 1 ]
[ 1, 0, 0, 1, 3 ]
Result:
[ { policePos: { y: 1, x: 4 }, treasurePos: undefined },
  { policePos: { y: 2, x: 4 }, treasurePos: undefined },
  { policePos: { y: 4, x: 4 }, treasurePos: undefined } ]
*********************
Test case 5:
[ 0, 0, 1, 0, 0 ]
[ 1, 0, 1, 1, 0 ]
Result:
[]
```
