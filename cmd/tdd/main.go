package main

type Dollar struct {
	Amount int
}

func NewDollar(n int) *Dollar {
	return &Dollar{Amount: n}
}

func (d *Dollar) Times(multiplier int) {
	d.Amount *= multiplier
}
