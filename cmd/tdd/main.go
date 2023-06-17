package main

type Dollar struct {
	amount int
}

func NewDollar(n int) *Dollar {
	return &Dollar{amount: n}
}

func (d *Dollar) Times(multiplier int) *Dollar {
	return &Dollar{amount: d.amount * multiplier}
}

func (d *Dollar) Equals(cd *Dollar) bool {
	return d.amount == cd.amount
}
