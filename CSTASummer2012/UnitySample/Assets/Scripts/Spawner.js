#pragma strict

var items : GameObject[];
var eTime : float;

function Start () {
	eTime = 0.0;
}

function Update () {
		if(eTime > 1) {
			eTime = 0.0;
			SpawnGO();
		}	
		else {
			eTime += Time.deltaTime;
		}

}

function SpawnGO() {
	// Pick a random cube from the array
	var i = Random.Range(0,items.Length);
	// Spawn it
	Instantiate(items[i],transform.position, transform.rotation);
}