#pragma strict

var freq : float;
var amp : float;

function Start () {
	freq = 1.0;
	amp = 1.0;
}

function Update () {
	var newZ = Mathf.Sin(Time.time * freq) * amp;
	var newPosition = Vector3(transform.position.x, transform.position.y, newZ);
	transform.position = newPosition;
}