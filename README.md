# police-and-treasure   

Hi, my friend, we have a map which is represented by a two-dimensional array.   
`0` represent normal road.  
`1` represent wall, which we can't walk to it for sure.  
`2` represent the priceless treasure.  
`3` represnt the police.  

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
