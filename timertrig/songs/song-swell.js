SONG = {}

SONG.title   = "swell"
SONG.author  = "bryc"
SONG.date    = "feb-10-2017"
SONG.comment = "remake of swell.v2m"
SONG.speed   = 94
SONG.wave    = [0,0,0,1,3]

SONG.seq = [

[ //CHORD1
    ['f#5'],       ,       ,       ,
           ,       ,['f#5'],       ,
           ,       ,       ,       ,
           ,       ,       ,       ,
    ['f#5'],       ,       ,       ,
           ,       ,['e5' ],       ,
           ,       ,       ,       ,
           ,       ,       ,       ,
],
[ //CHORD2
    ['d#5'],       ,       ,       ,
           ,       ,['d#5'],       ,
           ,       ,       ,       ,
           ,       ,       ,       ,
    ['d#5'],       ,       ,       ,
           ,       ,['c#5' ],       ,
           ,       ,       ,       ,
           ,       ,       ,       ,
],
[ // CHORD3
    ['c#5'],       ,       ,       ,
           ,       ,['b4' ],       ,
           ,       ,       ,       ,
           ,       ,       ,       ,
    ['a#4'],       ,       ,       ,
           ,       ,['a4' ],       ,
           ,       ,       ,       ,
           ,       ,       ,       ,
],
[ // BASS
    ['b1' ],       ,       ,       ,
    1      ,['b1',0.075 ],['f#2'],       ,
           ,       ,1      ,['f#2',0.075 ],
    ['f#2'],1      ,['a1' ],1      ,
    ['d#2'],       ,       ,       ,
    1      ,['d#2',.075],['a1' ],       ,
           ,       ,1      ,['a1',.075 ] ,
    ['a1' ],       ,       ,1      ,
],
[ // STAB
    ['f#5'],1      ,['f#5',.15],1      ,
    ['f#5',.025],1      ,['f#5'],1      ,
    ['f#5',.15],1      ,['f#5',.025],1      ,
    ['f#5',.015],1       ,['f#5',.005],1       ,
    ['d#5'],1      ,['d#5',.15],1      ,
    ['d#5',.025],1      ,['e5'],1      ,
    ['e5',.15],1      ,['e5',.025],['e5'],
    ['d#5'],1      ,['e5'],1      ,
],
[ // MELO
    ['c#5',0.12],       ,       ,       ,
    ['d#4'],       ,['b3' ],       ,
    ['f#4'],       ,['g#4'],       ,
           ,       ,['a#4'],       ,
           ,       ,       ,       ,
    ['b4' ],       ,['g#4'],       ,
           ,       ,['f#4'],['e4' ],
    ['d#4'],['c#4'],['b3' ],       ,
],
]