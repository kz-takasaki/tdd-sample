package main

type Dollar struct {
	Money
}

func NewDollar(n int) *Dollar {
	return &Dollar{Money{amount: n}}
}

func (d *Dollar) Times(multiplier int) *Dollar {
	return NewDollar(d.amount * multiplier)
}
