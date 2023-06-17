package main_test

import (
	main "tdd/cmd/tdd"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFive(t *testing.T) {
	five := main.NewDollar(5)
	assert.Equal(t, main.NewDollar(10), five.Times(2))
	assert.Equal(t, main.NewDollar(15), five.Times(3))
}

func TestEquality(t *testing.T) {
	assert.True(t, main.NewDollar(5).Equals(main.NewDollar(5)))
	assert.False(t, main.NewDollar(5).Equals(main.NewDollar(6)))
}
