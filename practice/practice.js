num = [8,15,25,3,9,26,45,53]
let temp = 0
for(i=0;i<num.length;i++){
    for(j=i+1;j<num.length;j++){
        if(num[i]<num[j]){
            temp = num[i]
            num[i] = num[j]
            num[j] = temp
        }
    }
}
ans = ""
for(i=0;i<num.length;i++){
    ans = ans + num[i] + ","
}

console.log(ans)
