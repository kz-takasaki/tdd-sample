package main

type Franc struct {
	Money
}

func NewFranc(n int) *Franc {
	return &Franc{Money{amount: n}}
}

func (d *Franc) Times(multiplier int) *Franc {
	return NewFranc(d.amount * multiplier)
}
