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
