/**
 * Created by kmurugesan on 9/27/13.
 */
function log(msg){
    //noinspection JSHint
    if( console && console.log){

        console.log(msg);
    }

}
function logToOutput(msg){
    var output=$("#output");
    output.append(msg+"<br>");
}

