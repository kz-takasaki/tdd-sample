package main

type Dollar struct {
	Amount int
}

func NewDollar(n int) *Dollar {
	return &Dollar{Amount: n}
}

func (d *Dollar) Times(multiplier int) *Dollar {
	return &Dollar{Amount: d.Amount * multiplier}
}

func (d *Dollar) Equals(cd *Dollar) bool {
	return d.Amount == cd.Amount
}
