package main_test

import (
	main "tdd/cmd/tdd"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFive(t *testing.T) {
	five := main.NewDollar(5)
	product := five.Times(2)
	assert.Equal(t, 10, product.Amount)
	product = five.Times(3)
	assert.Equal(t, 15, product.Amount)
}

func TestEquality(t *testing.T) {
	assert.True(t, main.NewDollar(5).Equals(main.NewDollar(5)))
	assert.False(t, main.NewDollar(5).Equals(main.NewDollar(6)))
}
