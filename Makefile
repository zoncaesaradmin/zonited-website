.PHONY: help serve clean

# Static site root. Future build output can land in DIST.
DIST ?= dist
PORT ?= 8000

help:
	@echo "Targets:"
	@echo "  serve  - local preview on http://localhost:$(PORT)"
	@echo "  clean  - remove build output and local junk"

serve:
	python3 -m http.server $(PORT)

clean:
	rm -rf $(DIST)
	find . -name .DS_Store -type f -delete
