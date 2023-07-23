package pet_test

import (
	pet "tdd/cmd/pet"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCry(t *testing.T) {
	c1 := pet.NewCat("ニャーニャー")
	assert.Equal(t, "ニャーニャー", c1.Cry())
}
