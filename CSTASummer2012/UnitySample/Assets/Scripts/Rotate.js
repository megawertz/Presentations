#pragma strict

// Declare variables exposed to the editor
var rate : float;

// Initialize default values for declared globals
// Perform other startup tasks
// Called once before the first call to Update
function Start () {
	rate = 10;
}

// Called every update
function Update () {

	// Perform rotation around the y axis
	// Time.deltaTime represents the amount of time 
	//   that has passed since the last call to this method
	transform.Rotate(Vector3.up * Time.deltaTime * rate);
}