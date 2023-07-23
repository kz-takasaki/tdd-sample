package main

type Money struct {
	amount int
}

func (m *Money) Equals(i interface{}) bool {
	var result bool
	switch v := i.(type) {
	case *Dollar:
		result = m.amount == v.amount
	case *Franc:
		result = m.amount == v.amount
	}
	return result
}
