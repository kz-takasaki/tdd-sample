package main

type Franc struct {
	amount int
}

func NewFranc(n int) *Franc {
	return &Franc{amount: n}
}

func (d *Franc) Times(multiplier int) *Franc {
	return &Franc{amount: d.amount * multiplier}
}

func (d *Franc) Equals(cd *Franc) bool {
	return d.amount == cd.amount
}
